import level from '../assets/Brands/Leticrete/LEVEL.png';
import levelC20 from '../assets/Brands/Leticrete/level c20.png';
import levelPrimer from '../assets/Brands/Leticrete/level primer-blue bottle.png';
import fortifiedMortarBed from '../assets/Brands/Leticrete/Fortified Mortar Bed.png';
import latascreed100 from '../assets/Brands/Leticrete/LATASCREED 100.png';
import mortar226 from '../assets/Brands/Leticrete/226_Thick_Bed_Mortar.png';
import concentrate3642 from '../assets/Brands/Leticrete/3642 Latex Concentrate.png';
import repairMortar from '../assets/Brands/Leticrete/LATICRETE REPAIR MORTAR.png';
import latexAdditive4237 from '../assets/Brands/Leticrete/4237 Latex Additive.png';
import blowholeFiller from '../assets/Brands/Leticrete/Blowhole-Filler.png';
import hydroBan from '../assets/Brands/Leticrete/HYDRO BAN.jpg';
import membrane9235 from '../assets/Brands/Leticrete/9235 Waterproofing Membrane.png';
import filletSealant from '../assets/Brands/Leticrete/HYDRO BAN Fillet & Sealant.png';
import platinum254 from '../assets/Brands/Leticrete/254 Platinum Adhesive.png';
import latapoxy300 from '../assets/Brands/Leticrete/LATAPOXY 300 Adhesive.jpg';
import latapoxy310 from '../assets/Brands/Leticrete/LATAPOXY 310 Stone Adhesive.jpg';
import powder211 from '../assets/Brands/Leticrete/211 CRETE FILLER POWDER.png';
import triMax125 from '../assets/Brands/Leticrete/125 TRI MAX.png';
import permacolorGrout from '../assets/Brands/Leticrete/PERMACOLOR Grout.jpg';
import permacolorGroutFs from '../assets/Brands/Leticrete/PERMACOLOR Grout FS.png';
import sandedGrout1500 from '../assets/Brands/Leticrete/1500 Sanded Grout.jpg';
import unsandedGrout1600 from '../assets/Brands/Leticrete/1600 Unsanded Grout.jpg';
import admix1776 from '../assets/Brands/Leticrete/1776 Grout Admix Plus.png';
import stellar from '../assets/Brands/Leticrete/Stellar.png';
import latasilSiliconeSealant from '../assets/Brands/Leticrete/LATASIL Silicone Sealant.png';
import latasilPrimer9118 from '../assets/Brands/Leticrete/LATASIL 9118 Primer.png';
import latafinishPutty from '../assets/Brands/Leticrete/LATAFINISH Wall Putty Fine Finish.png';
import stonetechBulletproof from '../assets/Brands/Leticrete/STONETECH BulletProof Sealer.png';
import stonetechImpregnatorPro from '../assets/Brands/Leticrete/STONETECH Impregnator Pro Sealer.jpg';

const LaticreteProducts = [
  // --- SURFACE PREPARATION & UNDERLAYMENTS ---
  {
    id: 1,
    name: "LATICRETE® LEVEL",
    description: "A cement-based easy-to-use, self-leveling underlayment designed for use over various substrates including concrete and ceramic tile to provide a smooth and flat surface.",
    productImg: level
  },
  {
    id: 2,
    name: "LATICRETE® LEVEL C20",
    description: "Premium self-leveling underlayment providing an exceptionally smooth and flat surface on which finished floor goods can be installed, placeable from 3 to 10 mm in a single lift.",
    productImg: levelC20
  },
  {
    id: 3,
    name: "LATICRETE® LEVEL PRIMER",
    description: "A concentrated premium quality, water-based primer designed to be applied prior to the installation of self-leveling underlayments and toppings to maximize bond strength.",
    productImg: levelPrimer
  },
  {
    id: 4,
    name: "3701 Fortified Mortar Bed",
    description: "A polymer-fortified blend of raw materials, Portland cement, and graded aggregates; highly versatile system for screeds and deep mortar beds without requiring latex admix.",
    productImg: fortifiedMortarBed
  },
  {
    id: 5,
    name: "LATASCREED 100",
    description: "A factory-prepared blend of raw materials, Portland cement, and graded fillers engineered to produce high-strength, quick-drying, and self-curing screeds with controlled shrinkage.",
    productImg: latascreed100
  },
  {
    id: 6,
    name: "226 Thick Bed Mortar",
    description: "A factory-prepared blend of carefully selected raw materials, Portland cement, and graded aggregates used with 3701 Mortar Admix to produce high-strength latex portland cement mortars.",
    productImg: mortar226
  },
  {
    id: 7,
    name: "3642 Latex Concentrate",
    description: "A highly concentrated latex admix diluted with water on-site and mixed with mortar or cement/sand to create premium cement plasters, renders, coatings, and screeds.",
    productImg: concentrate3642
  },

  // --- REPAIR MORTARS & GROUTS ---
  {
    id: 8,
    name: "LATICRETE® REPAIR MORTAR",
    description: "A highly consistent, polymer-modified structural repair mortar engineered specifically for vertical, overhead, and horizontal concrete structural applications.",
    productImg: repairMortar
  },
  {
    id: 9,
    name: "4237 Latex Additive",
    description: "4237 Latex Additive is a specially designed latex additive for use with 211 Powder to make high strength latex thin-set bed up to 3 mm and medium bed up to 15 mm mortars.",
    productImg: latexAdditive4237
  },
  {
    id: 10,
    name: "LATICRETE® BLOWHOLE FILLER",
    description: "A single-component polymer-modified cementitious repair mortar displaying excellent thermal compatibility with concrete to fill small voids up to 5mm.",
    productImg: blowholeFiller
  },

  // --- WATERPROOFING & ANTI-FRACTURE ---
  {
    id: 11,
    name: "HYDRO BAN® Waterproofing Membrane",
    description: "A thin, load-bearing waterproofing and crack isolation membrane that does not require the use of fabric in fields and corners. Advanced liquid-rubber technology.",
    productImg: hydroBan
  },
  {
    id: 12,
    name: "9235 Waterproofing Membrane",
    description: "Premium liquid-applied waterproofing membrane designed specifically for tile and stone installations, offering robust crack-suppression and outstanding durability.",
    productImg: membrane9235
  },
  {
    id: 13,
    name: "HYDRO BAN® Fillet & Joint Sealant",
    description: "A high-performance hybrid elastomeric sealant used to build cove cants, corners, and joints before applying full fluid waterproofing barriers.",
    productImg: filletSealant
  },

  // --- TILE & STONE ADHESIVES ---
  {
    id: 14,
    name: "254 Platinum Adhesive",
    description: "The ultimate one-step, polymer-fortified thin-set mortar for interior and exterior installations of tile and stone, offering extraordinary bond strength and long open time.",
    productImg: platinum254
  },
  {
    id: 15,
    name: "LATAPOXY® 300 Adhesive",
    description: "A high-performance chemical-resistant epoxy adhesive engineered to bond tile, stone, and agglomerates securely to demanding industrial, commercial, and chemical-prone substrates.",
    productImg: latapoxy300
  },
  {
    id: 16,
    name: "LATAPOXY® 310 Stone Adhesive",
    description: "A specialized dual-component epoxy matrix used for the rapid spot-bonding of heavy stone tiles and large format panels on internal and external vertical walls.",
    productImg: latapoxy310
  },
  {
    id: 17,
    name: "211 Powder",
    description: "211 Powder is a factory prepared blend of carefully selected raw materials, Portland cement and graded aggregates.",
    productImg: powder211
  },
  {
    id: 18,
    name: "125 TRI MAX® Mortar",
    description: "Three-in-one maximum performance thin-set mortar that provides crack isolation and acoustic sound mitigation while securing large-format tile and heavy stone panels.",
    productImg: triMax125
  },

  // --- GROUTS, SEALANTS & ADDITIVES ---
  {
    id: 19,
    name: "PERMACOLOR® Grout",
    description: "High-performance cementitious grout providing consistent color uniformity, high durability, and enhanced stain resistance for demanding tile joints.",
    productImg: permacolorGrout
  },
  {
    id: 20,
    name: "PERMACOLOR® Grout FS",
    description: "Advanced fast-setting, polymer-fortified cementitious tile grout designed to maximize color output and cure rapidly for heavy traffic exposure.",
    productImg: permacolorGroutFs
  },
  {
    id: 21,
    name: "1500 Sanded Grout",
    description: "Premium, factory-blended sanded tile joint filler composed of graded sand, portland cement, and color-fast pigments designed for installations with wide joint margins.",
    productImg: sandedGrout1500
  },
  {
    id: 22,
    name: "1600 Unsanded Grout",
    description: "Ultra-smooth unsanded cementitious grout formula ideal for narrow joint parameters and highly polished ceramic or sensitive marble surfaces.",
    productImg: unsandedGrout1600
  },
  {
    id: 23,
    name: "1776 Grout Admix Plus",
    description: "High-flexibility latex liquid formula mixed directly with 1500 and 1600 grouts instead of water to maximize moisture resistance, bond retention, and color fastness.",
    productImg: admix1776
  },
  {
    id: 24,
    name: "STELLAR™ Ready-To-Use Grout",
    description: "Next-generation, premium commercial pre-mixed grout technology offering extreme stain resistance, ultimate color precision, and hassle-free install washability.",
    productImg: stellar
  },
  {
    id: 25,
    name: "LATASIL™ Silicone Sealant",
    description: "High-performance, 100% silicone sealant designed specifically for use in moving joints, coves, corners, and expansion areas in tile and stone installations.",
    productImg: latasilSiliconeSealant
  },
  {
    id: 26,
    name: "LATASIL™ 9118 Primer",
    description: "A specialty clear structural primer formulated to increase dynamic surface adhesion before running LATASIL sealant beads through wet or underwater projects.",
    productImg: latasilPrimer9118
  },

  // --- WALL PUTTY & STONE PROTECTORS ---
  {
    id: 27,
    name: "LATAFINISH Wall Putty",
    description: "Mineral-based premium wall putty compound available in coarse and fine grain matrices to establish exceptionally flat, durable sub-finishes before painting.",
    productImg: latafinishPutty
  },
  {
    id: 28,
    name: "STONETECH® BulletProof® Sealer",
    description: "The ultimate micro-engineered architectural protective coating preventing water and oil stains from ruining natural porous stone surfaces.",
    productImg: stonetechBulletproof
  },
  {
    id: 29,
    name: "STONETECH® Impregnator Pro® Sealer",
    description: "Professional grade deep-penetrating solvent sealer designed to block moisture ingress and lock out contaminants on stone finishes without modifying surface gloss.",
    productImg: stonetechImpregnatorPro
  }
];

export default LaticreteProducts;
