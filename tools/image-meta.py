#!/usr/bin/env python3
"""Añade a src/data/images.json el color del fondo de cada fotografía (borde superior e inferior).
Sirve para encuadrar las piezas enteras (object-fit: contain) sin que se note el sobrante."""
import json, os
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path = f"{ROOT}/src/data/images.json"
m = json.load(open(path))
def avg(im, box):
    px = im.crop(box).resize((1, 1), Image.BOX).getpixel((0, 0))
    return "#%02x%02x%02x" % px
for slug, v in m.items():
    im = Image.open(f"{ROOT}/public/img/{slug}-{v["widths"][0]}.webp").convert("RGB")
    w, h = im.size
    v["bgt"] = avg(im, (0, 0, w, max(2, h // 25)))
    v["bgb"] = avg(im, (0, h - max(2, h // 25), w, h))
json.dump(m, open(path, "w"), ensure_ascii=False, indent=1)
low = [f"{k}({v['w']}px)" for k, v in m.items() if v["w"] < 1000]
print("baja resolución:", ", ".join(low) or "ninguna")
