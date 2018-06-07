function validateLanguage(lang_values) {
  const _values = lang_values.split("-");
  return !_values.some(lang => !platform.find(value => value.code_3 === lang));
}

const platform = [
  {
    code_3: "aar"
  },
  {
    code_3: "abk"
  },
  {
    code_3: "afr"
  },
  {
    code_3: "aka"
  },
  {
    code_3: "alb"
  },
  {
    code_3: "amh"
  },
  {
    code_3: "ara"
  },
  {
    code_3: "arg"
  },
  {
    code_3: "arm"
  },
  {
    code_3: "asm"
  },
  {
    code_3: "ava"
  },
  {
    code_3: "ave"
  },
  {
    code_3: "aym"
  },
  {
    code_3: "aze"
  },
  {
    code_3: "bak"
  },
  {
    code_3: "bam"
  },
  {
    code_3: "baq"
  },
  {
    code_3: "bel"
  },
  {
    code_3: "ben"
  },
  {
    code_3: "bih"
  },
  {
    code_3: "bis"
  },
  {
    code_3: "bos"
  },
  {
    code_3: "bre"
  },
  {
    code_3: "bul"
  },
  {
    code_3: "bur"
  },
  {
    code_3: "cat"
  },
  {
    code_3: "cha"
  },
  {
    code_3: "che"
  },
  {
    code_3: "chi"
  },
  {
    code_3: "chu"
  },
  {
    code_3: "chv"
  },
  {
    code_3: "cor"
  },
  {
    code_3: "cos"
  },
  {
    code_3: "cre"
  },
  {
    code_3: "cze"
  },
  {
    code_3: "dan"
  },
  {
    code_3: "div"
  },
  {
    code_3: "dut"
  },
  {
    code_3: "dzo"
  },
  {
    code_3: "eng"
  },
  {
    code_3: "epo"
  },
  {
    code_3: "est"
  },
  {
    code_3: "ewe"
  },
  {
    code_3: "fao"
  },
  {
    code_3: "fij"
  },
  {
    code_3: "fin"
  },
  {
    code_3: "fre"
  },
  {
    code_3: "fry"
  },
  {
    code_3: "ful"
  },
  {
    code_3: "geo"
  },
  {
    code_3: "ger"
  },
  {
    code_3: "gla"
  },
  {
    code_3: "gle"
  },
  {
    code_3: "glg"
  },
  {
    code_3: "glv"
  },
  {
    code_3: "gre"
  },
  {
    code_3: "grn"
  },
  {
    code_3: "guj"
  },
  {
    code_3: "hat"
  },
  {
    code_3: "hau"
  },
  {
    code_3: "heb"
  },
  {
    code_3: "her"
  },
  {
    code_3: "hin"
  },
  {
    code_3: "hmo"
  },
  {
    code_3: "hrv"
  },
  {
    code_3: "hun"
  },
  {
    code_3: "ibo"
  },
  {
    code_3: "ice"
  },
  {
    code_3: "ido"
  },
  {
    code_3: "iii"
  },
  {
    code_3: "iku"
  },
  {
    code_3: "ile"
  },
  {
    code_3: "ina"
  },
  {
    code_3: "ind"
  },
  {
    code_3: "ipk"
  },
  {
    code_3: "ita"
  },
  {
    code_3: "jav"
  },
  {
    code_3: "jpn"
  },
  {
    code_3: "kal"
  },
  {
    code_3: "kan"
  },
  {
    code_3: "kas"
  },
  {
    code_3: "kau"
  },
  {
    code_3: "kaz"
  },
  {
    code_3: "khm"
  },
  {
    code_3: "kik"
  },
  {
    code_3: "kin"
  },
  {
    code_3: "kir"
  },
  {
    code_3: "kom"
  },
  {
    code_3: "kon"
  },
  {
    code_3: "kor"
  },
  {
    code_3: "kua"
  },
  {
    code_3: "kur"
  },
  {
    code_3: "lao"
  },
  {
    code_3: "lat"
  },
  {
    code_3: "lav"
  },
  {
    code_3: "lim"
  },
  {
    code_3: "lin"
  },
  {
    code_3: "lit"
  },
  {
    code_3: "ltz"
  },
  {
    code_3: "lub"
  },
  {
    code_3: "lug"
  },
  {
    code_3: "mac"
  },
  {
    code_3: "mah"
  },
  {
    code_3: "mal"
  },
  {
    code_3: "mao"
  },
  {
    code_3: "mar"
  },
  {
    code_3: "may"
  },
  {
    code_3: "mlg"
  },
  {
    code_3: "mlt"
  },
  {
    code_3: "mon"
  },
  {
    code_3: "nau"
  },
  {
    code_3: "nav"
  },
  {
    code_3: "nbl"
  },
  {
    code_3: "nde"
  },
  {
    code_3: "ndo"
  },
  {
    code_3: "nep"
  },
  {
    code_3: "nno"
  },
  {
    code_3: "nob"
  },
  {
    code_3: "nor"
  },
  {
    code_3: "nya"
  },
  {
    code_3: "oci"
  },
  {
    code_3: "oji"
  },
  {
    code_3: "ori"
  },
  {
    code_3: "orm"
  },
  {
    code_3: "oss"
  },
  {
    code_3: "pan"
  },
  {
    code_3: "per"
  },
  {
    code_3: "pli"
  },
  {
    code_3: "pol"
  },
  {
    code_3: "por"
  },
  {
    code_3: "pus"
  },
  {
    code_3: "que"
  },
  {
    code_3: "roh"
  },
  {
    code_3: "rum"
  },
  {
    code_3: "run"
  },
  {
    code_3: "rus"
  },
  {
    code_3: "sag"
  },
  {
    code_3: "san"
  },
  {
    code_3: "sin"
  },
  {
    code_3: "slo"
  },
  {
    code_3: "slv"
  },
  {
    code_3: "sme"
  },
  {
    code_3: "smo"
  },
  {
    code_3: "sna"
  },
  {
    code_3: "snd"
  },
  {
    code_3: "som"
  },
  {
    code_3: "sot"
  },
  {
    code_3: "spa"
  },
  {
    code_3: "srd"
  },
  {
    code_3: "srp"
  },
  {
    code_3: "ssw"
  },
  {
    code_3: "sun"
  },
  {
    code_3: "swa"
  },
  {
    code_3: "swe"
  },
  {
    code_3: "tah"
  },
  {
    code_3: "tam"
  },
  {
    code_3: "tat"
  },
  {
    code_3: "tel"
  },
  {
    code_3: "tgk"
  },
  {
    code_3: "tgl"
  },
  {
    code_3: "tha"
  },
  {
    code_3: "tib"
  },
  {
    code_3: "tir"
  },
  {
    code_3: "ton"
  },
  {
    code_3: "tsn"
  },
  {
    code_3: "tso"
  },
  {
    code_3: "tuk"
  },
  {
    code_3: "tur"
  },
  {
    code_3: "twi"
  },
  {
    code_3: "uig"
  },
  {
    code_3: "ukr"
  },
  {
    code_3: "urd"
  },
  {
    code_3: "uzb"
  },
  {
    code_3: "ven"
  },
  {
    code_3: "vie"
  },
  {
    code_3: "vol"
  },
  {
    code_3: "wel"
  },
  {
    code_3: "wln"
  },
  {
    code_3: "wol"
  },
  {
    code_3: "xho"
  },
  {
    code_3: "yid"
  },
  {
    code_3: "yor"
  },
  {
    code_3: "zha"
  },
  {
    code_3: "zul"
  }
];

export { validateLanguage };
