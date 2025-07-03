# ✅ Module 1 – Homepage (Tâches frontend détaillées – Ayan Bridge V2)

📁 **Référence croisée** :
- UI/UX : `Dossier_UI_UX_AyanBridgeV2_Complet.docx`
- Maquettes : `Maquettes_visuelles_AyanBridge_V2.docx`
- Cahier technique : `Cahier_des_charges_technique_AyanBridgeV2.docx`
- Plan stratégique + pitchs

---

## 🎯 Objectif principal du module
Créer une **page d’accueil interactive, segmentante et intuitive**, capable d’orienter l’utilisateur selon son profil (apprenant, investisseur, créateur) dès les premières secondes.

---

## 🔨 Tâches globales (structure + logique)

### 📦 Layout général
- [ ] Créer un layout `PublicLayout.tsx` (Header + Footer inclus)
- [ ] Ajouter `HomePage.tsx` dans `/pages`
- [ ] Appliquer le thème Tailwind (bleu nuit / orange dynamique / blanc)
- [ ] Gérer l'accessibilité mobile-first

---

## 🧱 Composants UI à créer (dans `/components`)

### 1. `Navbar.tsx`
- [ ] Logo Ayan Bridge (à récupérer depuis l’interface Notion ou le recréer provisoirement)
- [ ] Boutons : Connexion, Inscription
- [ ] Sticky top avec fond semi-transparent (backdrop blur)
- [ ] Menu mobile burger avec slide-in

### 2. `HeroSection.tsx`
- [ ] Slogan central : **"Apprends. Crée. Investis. Gagne."**
- [ ] 5 boutons illustrés avec icônes personnalisées (ou placeholders) :
  - [ ] "📚 Je veux explorer la bibliothèque"
  - [ ] "🧠 Je veux investir"
  - [ ] "🎓 Ayan Learn Hub"
  - [ ] "🎛️ Salle d’opérations"
  - [ ] "📺 Bridge Live"
- [ ] Utiliser `Framer Motion` pour les transitions/hover
- [ ] Responsive empilé sur mobile

### 3. `HowItWorks.tsx`
- [ ] Section avec boucle d’évolution ou 3 étapes : découvrir → créer → investir
- [ ] Ajout d’illustrations / SVG à récupérer ou générer (type unDraw)
- [ ] Animation légère entre chaque étape au scroll

### 4. `PopularProductsCarousel.tsx`
- [ ] Carousel horizontal avec 5+ fiches produits
- [ ] Placeholder data (image, titre, type, prix)
- [ ] Boutons "Acheter" ou "Voir +"
- [ ] Composant réutilisable `ProductCard`
- [ ] Animation : slide, zoom, hover

### 5. `TestimonialsSection.tsx`
- [ ] Slider horizontal avec au moins 3 témoignages
- [ ] Données fictives : nom, avatar, notation ★★★★★, citation
- [ ] Mobile : slider tactile horizontal

### 6. `Footer.tsx`
- [ ] Liens vers pages légales, contact, politique RGPD
- [ ] Icônes réseaux sociaux : Facebook, LinkedIn, TikTok
- [ ] Style sombre + minimaliste

---

## 🧠 UX / Interactions spécifiques
- [ ] Hover animé sur les 5 boutons de redirection (framer-motion ou Tailwind group-hover)
- [ ] Scroll fluide entre les sections (CSS `scroll-behavior: smooth` ou librairie js)
- [ ] Responsive 100% (mobile-first avec Tailwind breakpoints)
- [ ] Accessibilité ARIA des boutons et navigation clavier

---

## 🔧 Backend/API Simulée (mock)
- [ ] Créer un fichier `/data/popularProducts.ts` pour mocker les produits du carousel
- [ ] Créer un fichier `/data/testimonials.ts` pour mocker les témoignages clients

---

## 🔐 Authentification (à préparer)
- [ ] Les boutons Connexion / Inscription mènent à `/login` et `/register`
- [ ] Le Header affiche les options "Mon profil" ou "Se déconnecter" si connecté (à implémenter plus tard)

---

## 🧪 Tests à prévoir
- [ ] Tests unitaires `HeroSection`, `PopularProductsCarousel`, `Navbar`
- [ ] Test visuel responsive (mobile/tablette)
- [ ] Accessibilité via Lighthouse ou axe-core

---

## 📎 À noter pour Cursor
- Aucun visuel ne sera fourni → récupérer sur `unDraw`, `Unsplash`, `Pexels`, `Lucide Icons`
- Tous les textes sont disponibles dans les fichiers .docx (utiliser tel quel)
- Animation fluide exigée entre blocs (Framer Motion recommandé)

---

## 🚀 Objectif de livraison
**Une page d’accueil complète, responsive, interactive et segmentante**, prête à guider l’utilisateur vers l’un des 5 pôles fonctionnels de la plateforme Ayan Bridge.
