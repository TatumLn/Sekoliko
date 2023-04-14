<template>
    <!--Bootstrap-->
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <!--Formulaire D'inscription (SignUp)-->
                <div class="message">
                    <!-- Message si l'inscription est reussie ou non-->
                  </div>
                <form >
                  <!--Identifiant-->
                  <div class="form-group">
                    <input type="text" name="identifiant" class="form-control" v-model="identifiant" placeholder="Entrer son identifiant ici" autocomplete="off">
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
        name: 'AdminAddUserPage',
      })
      export default class AdminAddUserPage extends Vue {
        identifiant = '';
        password = '';
        errors: { [key: string]: string } = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        $router: any;

        ajouter() {
          // Achiffage lorsque les champs sont vide
          this.errors = {};
          if (this.identifiant === '' || this.password === '') {
            this.errors.identifiant = 'Saisir un identifiant SVP!!';
            this.errors.password = 'Saisir un Mot de passe SVP!!';
          } else {
            // Lorsque les champs sont bien remplies
            // Endpoint avec le back-end
            fetch('http://localhost:3000/api/auth/checkIdentifiant', {
              // Methode POST
              method: 'POST',
              // Envoie la requete sous forme de JSON
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                identifiant: this.identifiant,
              }),
            })
            //Lorsqu'une reponse est obtenue
              .then((response) => response.json())
              .then((user) => {
                //Si l'identifiant est deja enregistré
                if (user.exists) {
                  alert("L'identifiant saisie est déjà inscrit");
                } else {
                  // Endpoint avec le back-end
                  fetch('http://localhost:3000/api/auth/signupUser', {
                    // Methode POST
                    method: 'POST',
                    // Envoie la requete sous forme de JSON
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      identifiant: this.identifiant,
                      password: this.password,
                    }),
                  })
                    .then(() => {
                      // en cas de Succes
                      console.log('Requete 2 envoyer avec succes');
                      this.$router.push(''); // rediriger vers
                    })
                    .catch(() => {
                      // en cas d'Erreur
                      console.log("Erreur lors d'envoie de la requete 2");
                    });
                }
              })
              .catch(() => {
                // en cas d'Erreur
                console.log("Erreur lors d'envoie de la requete 1");
              });
          }
        }
      }
</script>