<template>
    <!--Bootstrap-->
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{{ title }} <sub>Admin</sub> </h3>
              </div>
              <div class="card-body">
                <!--Formulaire D'inscription (SignUp)-->
                <div class="message">
                    <!-- Message si l'inscription est reussie ou non-->
                  </div>
                <form >
                  <!--Identifiant-->
                  <div class="form-group">
                    <input type="text" name="identifiant" class="form-control" v-model="identifiant" placeholder="Entrer un identifiant ici" autocomplete="off">
                    <!--  Affichage si le champ identifiant est vide-->
                    <span v-if="errors.identifiant" class="text-danger">{{ errors.identifiant }}</span>
                  </div>
                <br>
                  <!--Mot de passe-->
                  <div class="form-group">
                    <input type="password" name="password" class="form-control" v-model="password" placeholder="Saisir un mot de passe">
                    <!--  Affichage si le champ mot de passe est vide-->
                    <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                  </div>
                  <br>
                  <button type="submit" class="btn btn-primary" @click.prevent="ajouter">Ajouter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
    
<script lang="ts">
    import { Options, Vue } from 'vue-class-component';

    @Options({
        name: 'AdminSignUpPage',
      })
export default class AdminSignupPage extends Vue {
  title = 'Sekoliko';
  identifiant = '';
  password = '';
  errors: { [key: string]: string } = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      $router: any;

  ajouter() {
    // Affichage des erreurs si les champs sont vides
    this.errors = {};
    if (this.identifiant === '' || this.password === '') {
      this.errors.identifiant = 'Saisir un identifiant SVP!!';
      this.errors.password = 'Saisir un Mot de passe SVP!!';
    } else {
      // Endpoint avec le backend
      fetch('http://localhost:3000/api/authAdmin//AdminSignup', {
        // Methode POST
        method: 'POST',
        // Envoie la requete sous forme de JSON
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identifiant: this.identifiant,
          password: this.password
        })
      })
        .then(() => {
          // En cas de succès rediriger vers la page d'accueil de l'admin
          console.log('Requete envoyer avec succes')
          this.$router.push('/AdminHome');
        })
        .catch(() => {
          // En cas d'erreur
          console.log("Erreur lors d'envoie de la requete")
        })
    }
  }
}
</script>