#!/usr/bin/env python3
"""Genera public/og/<slug>.jpg (1200x630) para las vistas previas sociales a partir de public/img."""
import os, glob
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.makedirs(f"{ROOT}/public/og", exist_ok=True)
for f in sorted(glob.glob(f"{ROOT}/public/img/*-1200.webp")):
    slug = os.path.basename(f)[:-len("-1200.webp")]
    im = Image.open(f).convert("RGB")
    w, h = im.size
    tw, th = 1200, 630
    # relleno con el color de fondo de la fotografía y la pieza centrada, sin recortar de más
    scale = max(tw / w, th / h) if w / h > 1.2 else th / h
    bg = im.resize((tw, th), Image.LANCZOS).convert("RGB")
    from PIL import ImageFilter
    bg = bg.filter(ImageFilter.GaussianBlur(40))
    r = im.resize((round(w * th / h), th), Image.LANCZOS) if w / h <= 1.9 else im.resize((tw, round(h * tw / w)), Image.LANCZOS)
    if r.width > tw: r = r.crop(((r.width - tw) // 2, 0, (r.width - tw) // 2 + tw, r.height))
    bg.paste(r, ((tw - r.width) // 2, (th - r.height) // 2))
    bg.save(f"{ROOT}/public/og/{slug}.jpg", "JPEG", quality=82, optimize=True)
print("og listo")
