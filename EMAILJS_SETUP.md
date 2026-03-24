# Configuration pour les emails

## Configuration d'EmailJS

Pour que les emails fonctionnent correctement, suivez ces étapes :

### 1. Créer un compte EmailJS
- Allez sur [emailjs.com](https://www.emailjs.com/)
- Créez un compte gratuit

### 2. Créer un Email Service
- Dans votre dashboard EmailJS, allez à "Email Services"
- Cliquez sur "Create new service"
- Sélectionnez votre email provider (Gmail, Outlook, etc.)
- Complétez la configuration
- Notez votre **Service ID** (ex: service_xxxxx)

### 3. Créer un Email Template
- Allez à "Email Templates"
- Cliquez sur "Create new template"
- Créez un template avec les variables suivantes :

```
Subject: Nouveau message de {{from_name}}

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

- Notez votre **Template ID** (ex: template_xxxxx)

### 4. Obtenir votre Public Key
- Allez à "Account" dans votre profil
- Copiez votre **Public Key**

### 5. Remplir le fichier .env.local
Remplacez les valeurs dans `.env.local` :

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### 6. Redémarrer le serveur
```bash
npm run dev
```

Voilà ! Les emails devraient maintenant être envoyés à votre adresse email lorsqu'un utilisateur remplit le formulaire de contact.

> **Important** : Le fichier `.env.local` est dans `.gitignore` pour des raisons de sécurité. Vos clés ne seront jamais pushées sur GitHub.
