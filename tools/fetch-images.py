#!/usr/bin/env python3
"""Descarga y optimiza las fotografías del sitio.

Fuente: colección Open Access del Metropolitan Museum of Art (dominio público, CC0).
Genera public/img/<slug>-<ancho>.webp y src/data/images.json (alt, title, dimensiones).
Uso: python3 tools/fetch-images.py   (requiere Pillow)
"""
import io, json, os, sys, urllib.request
from PIL import Image, ImageChops

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "img")
API = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
WIDTHS = [480, 800, 1200, 1800]

# slug, id Met, alt (es), recortar bordes negros
IMAGES = [
 ("salon-tesse", 199118, "Gran salón francés del siglo XVIII con boiseries doradas, lámpara de araña y mobiliario de época", 0),
 ("salon-luis-xv", 189425, "Salón de estilo Luis XV con boiseries talladas y doradas, espejos y suelo de parqué", 0),
 ("salon-burdeos", 199390, "Salón circular francés de 1785 con mesa de juego, sillería roja y lámpara de bronce", 0),
 ("comoda-laca", 206968, "Cómoda francesa de Saunier, hacia 1780, con paneles de laca japonesa y bronces dorados", 0),
 ("comoda-marqueteria", 207877, "Cómoda francesa de Genty, hacia 1760, con marquetería de maderas finas y bronces dorados", 0),
 ("comoda-piffetti", 835302, "Cómoda italiana de Piffetti, hacia 1760, con marquetería de ébano, boj y nogal", 0),
 ("consola-dorada", 189460, "Consola francesa de roble tallado, pintado y dorado con sobre de mármol, hacia 1775", 0),
 ("sillon-heurtaut", 189341, "Sillón francés del siglo XVIII de nogal tallado con tapicería de seda bordada", 0),
 ("sillon-jacob", 189387, "Sillón de Georges Jacob de nogal tallado y dorado con seda brocada, 1788", 0),
 ("secreter-porcelana", 202158, "Secreter francés con placas de porcelana de Sèvres, hacia 1775", 0),
 ("secreter-weisweiler", 206589, "Secreter de Weisweiler con laca japonesa y bronces dorados, hacia 1790", 0),
 ("sopera-lamerie", 200583, "Sopera de plata de Paul de Lamerie, Londres, 1736", 0),
 ("sopera-weyhe", 236747, "Sopera con fuente de plata y plata dorada de Weyhe, 1769-1771", 0),
 ("sopera-roettiers", 206569, "Sopera de plata con tapa, obra de Roettiers, París, 1775-1776", 0),
 ("sopera-percier", 197467, "Sopera de plata dorada diseñada por Percier, París, hacia 1800", 0),
 ("bronce-mono", 714900, "Fuente de bronce con figura de mono, de Caspar Gras, hacia 1600", 0),
 ("bronce-termino", 196551, "Figura de término en bronce de Annibale Fontana, finales del siglo XVII", 0),
 ("bronce-hercules", 761120, "Hércules vence a Nereo, bronce de Adriaen de Vries, hacia 1610", 0),
 ("bronce-yacente", 197058, "Figura femenina yacente en bronce sobre peana, mediados del siglo XVI", 0),
 ("reloj-leroy", 206981, "Reloj de sobremesa de Julien Le Roy con porcelana de Chantilly y bronce dorado, hacia 1747", 0),
 ("reloj-lenoir", 204564, "Reloj de sobremesa francés de bronce dorado y porcelana, hacia 1745", 0),
 ("reloj-pons", 209347, "Reloj de sobremesa de bronce dorado y patinado con mármol, hacia 1845", 0),
 ("reloj-brockbank", 204556, "Reloj de sobremesa inglés de caoba con bronce dorado, hacia 1800", 0),
 ("sevres-bastones", 202178, "Jarrón con tapa de porcelana de Sèvres, hacia 1764, azul y oro", 0),
 ("sevres-elefante", 207383, "Jarrón de Sèvres con cabezas de elefante y esmaltes policromos, hacia 1757", 0),
 ("sevres-parisenfants", 202183, "Jarrón de Sèvres con tapa y escena pintada, hacia 1778", 0),
 ("sevres-perlas", 202186, "Jarrón de Sèvres de azul real con medallón pintado y bronce dorado, hacia 1767", 0),
 ("meissen-helado", 239350, "Cubo de porcelana de Meissen con decoración de flores y asas doradas", 0),
 ("retrato-andaluz", 437728, "Retrato de caballero al óleo sobre lienzo, escuela andaluza", 1),
 ("cabeza-castellana", 437734, "Cabeza de hombre joven al óleo, escuela castellana del siglo XVII", 1),
 ("retrato-terborch", 435715, "Retrato de hombre sentado, óleo sobre tabla de Gerard ter Borch el Joven", 1),
 ("bodegon-fantin", 436294, "Bodegón con pensamientos y manzanas, óleo de Fantin-Latour, 1874", 1),
 ("bodegon-renoir", 437429, "Bodegón con melocotones, óleo de Renoir, 1881", 1),
 ("goya-maria-luisa", 436552, "Retrato de María Luisa de Parma, reina de España, óleo de Goya", 1),
 ("goya-martinez", 436541, "Retrato de Sebastián Martínez y Pérez, óleo de Goya, 1792", 1),
 ("goya-toros", 436554, "Corrida de toros en plaza partida, óleo de Goya, hacia 1810", 1),
 ("paisaje-koch", 439844, "Paisaje heroico con arcoíris, óleo de Joseph Anton Koch, 1824", 1),
 ("busto-canova", 239576, "Busto de mármol de Carrara de Antonio Canova, hacia 1810", 0),
 ("busto-verschaffelt", 206712, "Busto de mármol de un caballero inglés, de Verschaffelt, 1740", 0),
 ("busto-roland", 208978, "Busto de mármol de Philippe Laurent Roland, hacia 1785", 0),
 ("busto-moro", 826325, "Busto de mármol policromo de un moro, siglo XVIII", 0),
 ("caja-oro-1757", 206162, "Tabaquera francesa de oro cincelado, 1757-1758", 0),
 ("caja-oro-heric", 202280, "Tabaquera de oro de Claude Héricourt, 1768-1769", 0),
 ("caja-oro-bodson", 206418, "Tabaquera ovalada de oro de Henry Bodson, 1768-1769", 0),
 ("estuche-te", 203643, "Estuche de té esmaltado sobre cobre con decoración pintada, hacia 1768", 0),
 ("cofre-esmalte", 203293, "Cofre de esmalte pintado sobre cobre con metal dorado, hacia 1770", 0),
 ("cofre-genesis", 206832, "Cofre de esmalte pintado con escenas del Génesis, de Suzanne de Court, siglo XVII", 0),
 # Pieles y complementos
 ("piel-capa-negra", 107121, "Capa corta de piel oscura con forro, hacia 1892", 0),
 ("piel-capa-rojiza", 107271, "Capa larga de piel de tono rojizo, entre 1850 y 1900", 0),
 ("piel-manguito-negro", 104701, "Manguito de piel negra de finales de la década de 1880", 0),
 ("piel-manguito-marron", 169735, "Manguito de piel marrón con cordón, hacia 1885", 0),
 # Joyería (perlas, esmaltes y coral)
 ("joya-colgante-coral", 468367, "Colgante de hacia 1500 con coral tallado, serpiente y perlas barrocas", 0),
 ("joya-colgante-loro", 207266, "Colgante renacentista en forma de loro con perla barroca", 0),
 ("joya-colgante-gato", 207267, "Colgante renacentista en forma de gato sentado con perla barroca", 0),
 ("joya-colgante-perlas", 197141, "Colgante del siglo XVII con perlas y esmalte", 0),
 ("joya-collar-perlas", 17575, "Collar de perlas con motivos florales, hacia 1850", 0),
]

def get(url):
    for _ in range(4):
        try:
            return urllib.request.urlopen(url, timeout=60).read()
        except Exception as e:
            err = e
    raise err

def trim_black(im):
    bg = Image.new("RGB", im.size, (0, 0, 0))
    diff = ImageChops.difference(im, bg).convert("L").point(lambda p: 255 if p > 28 else 0)
    box = diff.getbbox()
    if not box:
        return im
    l, t, r, b = box
    pad = 6
    return im.crop((l + pad, t + pad, r - pad, b - pad))

def main():
    os.makedirs(OUT, exist_ok=True)
    only = set(sys.argv[1:])  # opcional: procesar solo estos slugs y conservar el resto del manifiesto
    mpath = os.path.join(ROOT, "src", "data", "images.json")
    manifest = json.load(open(mpath, encoding="utf-8")) if only and os.path.exists(mpath) else {}
    for slug, oid, alt, trim in IMAGES:
        if only and slug not in only:
            continue
        meta = json.loads(get(API + str(oid)))
        assert meta.get("isPublicDomain"), slug
        src = meta["primaryImage"]
        im = Image.open(io.BytesIO(get(src))).convert("RGB")
        if trim:
            im = trim_black(im)
        widths = []
        for w in WIDTHS:
            if w > im.width and widths:
                break
            tw = min(w, im.width)
            h = round(im.height * tw / im.width)
            im.resize((tw, h), Image.LANCZOS).save(os.path.join(OUT, f"{slug}-{tw}.webp"), "WEBP", quality=74, method=6)
            widths.append(tw)
        manifest[slug] = {"alt": alt, "w": im.width, "h": im.height, "widths": widths, "met": oid}
        print(slug, im.size, widths, file=sys.stderr)
    with open(os.path.join(ROOT, "src", "data", "images.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)

main()
