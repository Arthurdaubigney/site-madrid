#!/usr/bin/env python3
"""Importa fotografías de Wikimedia Commons ya descargadas con `photos.mjs fetch` (skill design-taste-frontend).

Uso: python3 tools/import-commons.py DIR      (DIR contiene assets/img/ y credits.json)
Genera public/img/<slug>-<ancho>.webp y añade a src/data/images.json el alt y la atribución
(autor, licencia y página de origen), que /creditos-fotograficos/ publica.
"""
import glob, json, os, subprocess, sys, tempfile
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIDTHS = [480, 800, 1200]

# slug, id Commons, alt (es)
IMAGES = [
 ("vargueno-taquillon", "f25574198", "Vargueño español del siglo XVII sobre taquillón, de nogal con herrajes de hierro forjado e incrustaciones de hueso"),
 ("bargueno-valencia", "f27455536", "Bargueño español con cajones taraceados sobre mesa, Museo de Bellas Artes de Valencia"),
 ("bargueno-goya", "f61550025", "Bargueño de cajones taraceados con escudo en la casa natal de Goya, Fuendetodos"),
 ("vargueno-detalle", "f50616107", "Detalle de un vargueño español con taracea y portada arquitectónica"),
 ("banco-cerralbo", "f30369263", "Bargueño y banco almohadillado de talla española en el Museo Cerralbo, Madrid"),
 ("vargueno-soporte", "f64760681", "Soporte de vargueño español del siglo XVII, de madera torneada"),
 ("reloj-bellver-dorado", "f73854696", "Reloj de sobremesa antiguo de bronce dorado, Colección Bellver, Sevilla"),
 ("reloj-bellver-porcelana", "f74455114", "Reloj de sobremesa antiguo con porcelana azul y bronce dorado, Colección Bellver, Sevilla"),
 ("reloj-bellver-tempus", "f98357630", "Reloj antiguo de porcelana policromada «Tempus fugit», Colección Bellver, Sevilla"),
 ("moneda-excelentes", "f135934636", "Veinte excelentes de la granada de los Reyes Católicos, Museo Arqueológico Nacional"),
 ("moneda-reyes-catolicos", "f121660053", "Excelentes de los Reyes Católicos con los bustos de Isabel y Fernando, anverso y reverso"),
 ("moneda-pesetas-1870", "f13335595", "Moneda de cinco pesetas de 1870 con la alegoría de España, anverso y reverso"),
 ("moneda-cinco-pesetas", "f137015731", "Moneda de cinco pesetas de 1870 acuñada en Madrid, anverso"),
 ("moneda-ocho-reales-1759", "f45282809", "Moneda de ocho reales de 1759 de tipo columnario, anverso y reverso"),
 ("moneda-reales-carlos-iv", "f27901792", "Dos monedas de ocho reales de Carlos IV, de las cecas de México y Potosí"),
 ("moneda-dirham", "f64764124", "Dírham de Al-Ándalus de la época de Hisham II, anverso y reverso"),
 ("moneda-tremis", "f94112074", "Tremís visigodo de la época del rey Leovigildo"),
 ("moneda-maravedis", "f97100192", "Moneda de ocho maravedís del siglo XVII, de cobre"),
 ("moneda-dos-reales-1754", "f61821923", "Moneda de dos reales de 1754 de tipo columnario"),
 ("moneda-cuatro-reales", "f61811944", "Moneda de cuatro reales de 1774 con el busto de Carlos III"),
 ("piel-abrigo-blanco", "f11765909", "Abrigo largo de visón blanco sobre maniquí"),
 ("piel-abrigo-gris", "f11784115", "Abrigo de visón gris azulado"),
]

def main(src):
    credits = {c["id"]: c for c in json.load(open(os.path.join(src, "assets", "img", "credits.json")))["photos"]}
    mpath = os.path.join(ROOT, "src", "data", "images.json")
    manifest = json.load(open(mpath, encoding="utf-8"))
    out = os.path.join(ROOT, "public", "img")
    for slug, cid, alt in IMAGES:
        files = sorted(glob.glob(os.path.join(src, "assets", "img", f"photo-{cid}*.webp")), key=os.path.getsize)
        if not files:
            print("falta", slug, cid); continue
        with tempfile.TemporaryDirectory() as tmp:
            png = os.path.join(tmp, "x.png")
            subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", files[-1], png], check=True)
            im = Image.open(png).convert("RGB")
        widths = []
        for w in WIDTHS:
            if w > im.width and widths: break
            tw = min(w, im.width)
            im.resize((tw, round(im.height * tw / im.width)), Image.LANCZOS).save(os.path.join(out, f"{slug}-{tw}.webp"), "WEBP", quality=76, method=6)
            widths.append(tw)
        c = credits[cid]
        manifest[slug] = {"alt": alt, "w": im.width, "h": im.height, "widths": widths,
                          "credit": {"by": c["by"], "licence": c["licence"], "page": c["page"]}}
        print(slug, im.size, widths, c["licence"])
    json.dump(manifest, open(mpath, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

main(sys.argv[1])
