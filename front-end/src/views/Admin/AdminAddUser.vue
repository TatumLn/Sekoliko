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
                    <span v-if="errors.identifiant" class="text-danger">{{ errors.identifiant }}</span>
                  </div>
                  <br>
                  <!--Mot de passe-->
                  <div class="form-group">
                    <input type="password" name="password" class="form-control" v-model="password" placeholder="Saisir un mot de passe">
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
    import { defineComponent } from 'vue'
    //
    interface AdminAddUserData {
    identifiant: string;
    password: string;
    errors: { [key: string]: string };
    }
    
    export default defineComponent({
      //Nom du viewers 
      name: 'AdminAddUserPage',
      data(): AdminAddUserData {
        return {
          identifiant: '',
          password: '',
          errors: {}
        }
      },
      methods: {
        ajouter: function() { 
          //Achiffage lorsque les champs sont vide
          this.errors = {};
          if (this.identifiant === '' || this.password === '') {
            this.errors.identifiant = 'Saisir un identifiant SVP!!';
            this.errors.password = 'Saisir un Mot de passe SVP!!';
          }else {
          //Lorsque les champs sont bien remplies
          //Endpoint avec le back-end
          fetch("http://localhost:3000/api/auth/checkIdentifiant", {
            //methode POST
            method: "POST",
            //Envoie la requete sous forme de JSON
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identifiant: this.identifiant,
            }),
          })
          .then((response) => response.json())
            .then((user) => {
              if (user.exists) {
                alert("L'identifiant saisie est déjà inscrit");
              } else {
          //Endpoint avec le back-end
        fetch('http://localhost:3000/api/auth/signupUser', { 
            //methode POST
          method: 'POST',
          //Envoie la requete sous forme de JSON
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            identifiant: this.identifiant,
            password: this.password
          })
        })
        .then( ()=> {
          //en cas de Succes 
          console.log('Requete 2 envoyer avec succes')
          this.$router.push(''); // rediriger vers 
        })
        .catch( ()=> {
          //en cas d'Erreur
          console.log('Erreur lors d\'envoie de la requete 2')
        })
      }
    })
         .catch( ()=> {
          //en cas d'Erreur
          console.log('Erreur lors d\'envoie de la requete 1')
        })
        }
    
      }}
    })
</script>