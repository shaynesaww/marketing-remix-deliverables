#!/usr/bin/env python3
"""
Generate brand-kb-data.js — bundles every markdown file in this deliverable
into a single JS data blob so the dashboard works when opened via file://.

Run this from the deliverable root anytime an atom changes:
    python build-bundle.py

Output: brand-kb-data.js (sibling to index.html)
"""
import os
import json
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
INCLUDE_DIRS = ['brand-kb', 'proposals', 'onboarding']
OUT = os.path.join(ROOT, 'brand-kb-data.js')

data = {}
total_bytes = 0

for d in INCLUDE_DIRS:
    abs_d = os.path.join(ROOT, d)
    if not os.path.isdir(abs_d):
        continue
    for dirpath, _, filenames in os.walk(abs_d):
        for fn in filenames:
            if not fn.endswith('.md'):
                continue
            abs_path = os.path.join(dirpath, fn)
            rel = os.path.relpath(abs_path, ROOT).replace('\\', '/')
            with open(abs_path, 'r', encoding='utf-8') as f:
                content = f.read()
            data[rel] = content
            total_bytes += len(content.encode('utf-8'))

js_payload = json.dumps(data, ensure_ascii=False, indent=0)

js_file = (
    "// Auto-generated bundle of every markdown file in this deliverable.\n"
    "// Lets the dashboard work when opened directly via file:// (no server).\n"
    "// Regenerate with: python build-bundle.py\n"
    f"// Files: {len(data)} | Total: {total_bytes:,} bytes\n"
    "window.__BUNDLED_DATA__ = " + js_payload + ";\n"
)

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(js_file)

print(f"[ok] Wrote {OUT}")
print(f"     {len(data)} markdown files, {total_bytes:,} bytes embedded")
