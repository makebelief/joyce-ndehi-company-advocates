#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets/images
command -v curl >/dev/null || { echo "curl is required" >&2; exit 1; }
fetch(){
  local dest="assets/images/$1" id="$2" width="$3" height="$4"
  local url="https://images.unsplash.com/photo-${id}?fit=crop&w=${width}&h=${height}&q=83&fm=jpg"
  echo "Fetching $dest"
  curl --fail --location --silent --show-error --retry 3 --connect-timeout 12 --max-time 90     --user-agent 'Mozilla/5.0' "$url" -o "${dest}.part"
  if [[ ! -s "${dest}.part" ]] || [[ "$(head -c 3 "${dest}.part" | od -An -tx1 | tr -d ' \n')" != "ffd8ff" ]]; then
    echo "ERROR: invalid JPEG downloaded for $dest" >&2
    rm -f "${dest}.part"
    exit 1
  fi
  mv "${dest}.part" "$dest"
}
fetch legal-hero.jpg             1505664194779-8beaceb93744 1920 1080
fetch mediation-discussion.jpg   1521737711867-e3b97375f902 900 600
fetch succession-family.jpg     1511895426328-dc8714191300 900 600
fetch property-keys.jpg         1560518883-ce09059eeffa 900 600
fetch commercial-contract.jpg   1450101499163-c8848c66ca85 900 600
fetch data-protection.jpg       1563013544-824ae1b704d3 900 600
fetch litigation-justice.jpg    1589829545856-d10d557cf95f 900 600
echo "All seven distinct photographs downloaded successfully."
