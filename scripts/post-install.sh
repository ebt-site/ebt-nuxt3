#!/bin/bash
SCRIPT=`basename $0`
echo -e "$SCRIPT: BEGIN"

if [ ! -e .ebt-vue3-src ]; then
  echo -e "$SCRIPT: linking to ebt-vue3 src directory (.ebt-vue3-src)"
  ln -s node_modules/ebt-vue3/src .ebt-vue3-src
fi

echo -e "$SCRIPT: END"
