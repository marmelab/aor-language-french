module.exports = {
    aor: {
        action: {
            delete: 'Supprimer',
            show: 'Afficher',
            list: 'Liste',
            save: 'Enregistrer',
            create: 'Créer',
            edit: 'Éditer',
            cancel: 'Quitter',
            refresh: 'Actualiser',
            add_filter: 'Ajouter un filtre',
            remove_filter: 'Supprimer ce filtre',
            back: 'Retour'
        },
        boolean: {
            true: 'Oui',
            false: 'Non',
        },
        page: {
            list: 'Liste des %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Créer %{name}',
            delete: 'Supprimer %{name} #%{id}',
            dashboard: 'Tableau de bord',
            not_found: 'Page manquante'
        },
        input: {
            image: {
                upload_several: 'Déposez les fichiers à uploader, ou cliquez pour en sélectionner.',
                upload_single: 'Déposez le fichier à uploader, ou cliquez pour le sélectionner.',
            },
        },
        message: {
            yes: 'Oui',
            no: 'Non',
            are_you_sure: 'Êtes-vous sûr ?',
            about: 'Au sujet de',
            not_found: 'L\'URL saisie est incorrecte, ou vous avez suivi un mauvais lien.',
        },
        navigation: {
            no_results: 'Aucun résultat',
            page_out_of_boundaries: 'La page %{page} est en dehors des limites',
            page_out_from_end: 'Fin de la pagination',
            page_out_from_begin: 'La page doit être supérieure à 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} sur %{total}',
            next: 'Suivant',
            prev: 'Précédent',
        },
        auth: {
            username: 'Identifiant',
            password: 'Mot de passe',
            sign_in: 'Connexion',
            sign_in_error: 'Échec de l\'authentification, merci de réessayer',
            logout: 'Déconnexion',
        },
        notification: {
            updated: 'Élément mis à jour',
            created: 'Élément créé',
            deleted: 'Élément supprimé',
            item_doesnt_exist: 'L\'élément n\'existe pas',
            http_error: 'Erreur de communication avec le serveur',
        },
        validation: {
            required: 'Ce champ est requis',
            minLength: 'Minimum %{min} caractères',
            maxLength: 'Maximum %{max} caractères',
            minValue: 'Minimum %{min}',
            maxValue: 'Maximum %{max}',
            number: 'Doit être un nombre',
            email: 'Doit être un email',
        },
    },
};
