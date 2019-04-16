#!/usr/bin/env bash

# download the latest nba teams logos

# link like: https://stats.nba.com/media/img/teams/logos/GSW_logo.svg
function link() {
    echo "https://stats.nba.com/media/img/teams/logos/"$1"_logo.svg"
}

ASSET_DIR=./assets/test

cd $ASSET_DIR

while read t
do
  l=$(link $t)
  curl --progress-bar $l -o ${t}_logo.svg

  # thanks https://www.systutorials.com/241682/how-to-convert-svg-to-png-in-linux/
  inkscape -z -e ${t}_logo.png -w 400 -h 400 ${t}_logo.svg 
done <<EOF
ATL
BKN
BOS
CHA
CHI
CLE
DAL
DEN
DET
GSW
HOU
IND
LAC
LAL
MEM
MIA
MIL
MIN
NOP
NYK
OKC
ORL
PHI
PHX
POR
SAC
SAS
TOR
UTA
WAS
EOF

cd -