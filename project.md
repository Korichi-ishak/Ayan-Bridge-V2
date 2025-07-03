# 🎨 UI/UX – Détails Frontend Ayan Bridge V2 (Extrait des fichiers fournis)

Ce fichier rassemble **toutes les exigences UI/UX frontend** issues des documents Word transmis, pour guider le développement avec précision.

---

## 🏠 Module 1 – Page d’accueil (Homepage)
**Objectif** : Guider l’utilisateur selon son intention dès l’arrivée.

### 🔹 Composants à développer :
- Header sticky avec logo Ayan + bouton login/register
- Slogan central : **"Apprends. Crée. Investis. Gagne."**
- 5 boutons visuels (avec icônes) :
  - 📚 Je veux explorer la bibliothèque
  - 🧠 Je veux investir
  - 🎓 Ayan Learn Hub
  - 🎛️ Salle d’opérations
  - 📺 Bridge Live
- Section "Comment ça marche" → animation en boucle
- Section "Produits populaires" → carrousel ou grilles
- Section "Témoignages" → slider avec étoiles + texte utilisateur
- Footer avec liens : réseaux sociaux, mentions, conditions

### 🔹 UX attendue :
- Hover interactif (accentuation bouton au survol)
- Redirection immédiate au clic
- Scroll fluide entre sections
- Animation douce entre blocs (Framer Motion)
- Adaptation mobile : boutons empilés, sliders horizontaux

---

## 🟠 Module 3 – Studio Intelligent
**Objectif** : Permettre à tout utilisateur de créer un produit numérique assisté par IA.

### 🔹 Interface frontend à concevoir :
- Menu latéral fixe avec étapes :
  1. Choix du type de produit
  2. Entrée du thème
  3. Génération IA (titre, structure, contenu)
  4. Édition manuelle glisser-déposer
  5. Publication ou planification

- Zone centrale d’édition (widgets glissables) :
  - Texte, image, vidéo, quiz, bouton, pdf
- Barre supérieure : publier, sauvegarder, revenir
- Sidebar : bibliothèque perso, modèles préconçus

### 🔹 UX attendue :
- Auto-alignement lors du drag
- Suggestions IA dynamiques (titres, images…)
- Prévisualisation live (PDF ou mode cours)
- Sauvegarde automatique toutes les 30 sec
- Animation entre étapes (Framer Motion)
- Mobile : édition limitée (titre, description)

---

## 🔵 Module 2 – Marketplace (Magasin)
**Objectif** : Explorer, filtrer et acheter des produits digitaux (ebooks, lives, vidéos).

### 🔹 Composants clés :
- Barre de recherche intelligente
- Filtres latéraux dynamiques (thème, format, créateur)
- Affichage en cartes (image, titre, prix, bouton “Acheter”)
- Badge LIVE visible si produit en direct

### 🔹 UX attendue :
- Résultats dynamiques sans rechargement
- Hover léger sur produit = zoom ou bouton visible
- Scroll infini ou pagination fluide
- Affichage mobile : 1 colonne ou carrousel horizontal

---

## 🟢 Module 4 – Learn Hub
**Objectif** : Suivre des parcours éducatifs personnalisés.

### 🔹 Composants :
- Tableau de bord personnel (progression, badges, sessions à venir)
- Séparation claire des sections :
  - **Bridge School** : cours scolaires (semaine, matière)
  - **Bridge Academy** : formations thématiques (business, dev perso…)
  - **Bridge Live** : agenda d’événements, replay, chaîne continue

### 🔹 UX attendue :
- Navigation fluide entre sections
- Favoris, terminés, replays visibles en 1 clic
- Interface IA de suggestions et rappels
- Notifications visuelles ou push

---

## 💼 Module 5 – Bridge Capital / Investor Club
**Objectif** : Investir dans des produits numériques internes (cours, ebooks, lives).

### 🔹 Composants :
- Tableau de projets sponsorisables (filtrables)
- Fiche projet détaillée :
  - Titre, résumé, créateur, rendement estimé, stats de vente
  - Boutons : “Investir”, “Suivre”, “Noter”
- Session de pitch en direct : vidéo intégrée (Zoom, YouTube)
- Tchat / FAQ live intégrée
- Suivi investissements : courbe ou donut, total investi, gains

### 🔹 UX attendue :
- Interface type startup (chiffres visibles, clean)
- Sections séparées : pitch, investissement, historique
- Investissement possible sans compte (mode invité)
- Mobile : cartes verticales, graphique responsive

---

## 🧠 Module 6 – Profil Utilisateur Unique
**Objectif** : Centraliser toute l’activité de l’utilisateur sur un seul tableau de bord.

### 🔹 Composants du tableau de bord :
- Header personnalisé : avatar, menu (paramètres, logout)
- Sections cliquables :
  - Mes achats, créations, ventes, investissements, live, certificats
- Widgets visuels : graphiques, alertes (succès, à faire)
- Paramètres de personnalisation : thème sombre, langue

### 🔹 UX attendue :
- Navigation rapide (1 à 2 clics max)
- Tri, filtres, historique
- Téléchargement de certificats / rapports
- Design modulaire (type Notion, Canva)
- Mobile : onglets fixes + défilement vertical fluide

---

## 📱 Mobile / Responsive Design – Général
- Carrousels horizontaux tactiles (produits, témoignages)
- Menus slide-in (sidebar, filtres, dashboard)
- Adaptation mobile-first
- Boutons larges, lisibles, accessibles

---

## 🎨 Identité visuelle
- **Palette Ayan Bridge** : Bleu nuit (#0b1e3d), Orange dynamique (#f97316), Blanc pur (#ffffff)
- **Typographie** : moderne, visible, large (sans-serif)
- **Style global** : épuré, professionnel, modulaire, fluide
- **Inspirations design** : Notion, Stripe, Canva, Framer

---

Ces éléments sont à respecter scrupuleusement lors de la conception frontend de chaque page et module. Ils garantissent cohérence, accessibilité, performance et expérience utilisateur optimale.
