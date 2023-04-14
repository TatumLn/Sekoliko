<template>
  <!--Bootstrap-->
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <!--<img src="../assets/sekoliko.png" alt="Image description" width="200px">-->
              <h3 class="card-title">{{ title }}</h3>
            </div>
            <div class="card-body">
              <!--Formulaire de Connexion (Login)-->
              <div class="message">
                  <!-- Message si la connexion est reussie ou non-->
                </div>
              <form @submit.prevent="connecter">
                <!--Identifiant-->
                <div class="form-group">
                  <input type="text" name="username" class="form-control" v-model="identifiant" placeholder="identifiant" autocomplete="off">
                  <!--  Affichage si le champ identifiant est vide-->
                  <span v-if="errors.identifiant" class="text-danger">{{ errors.identifiant }}</span>
                </div>
                <br>
                <!--Mot de passe-->
                <div class="form-group">
                  <input type="password" name="password" class="form-control" v-model="password" placeholder="Mot de passe">
                  <!--  Affichage si le champ mot de passe est vide-->
                  <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                </div>
                <br>
                <button type="submit" class="btn btn-primary" >Se Connecter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts">
    import { Vue, Options } from 'vue-class-component';

    @Options({
      name: 'LoginPage',
    })
    export default class LoginPage extends Vue {
      title = 'Sekoliko';
      identifiant = '';
      password = '';
      errors: { [key: string]: string } = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      $router: any;

      connecter() {
        // Initialiser les erreurs
        this.errors = {};
        if (this.identifiant === '' || this.password === '') {
          this.errors.identifiant = 'Entrer Votre identifiant SVP!!';
          this.errors.password = 'Entrer Votre Mot de passe SVP!!';
        } else {
          //Envoyer une requête POST au serveur
          fetch('http://localhost:3000/api/auth/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              identifiant: this.identifiant,
              password: this.password
            })
          })
          //Si une reponse est obtenue
            .then(response => response.json())
            .then(data => {
              //Si identifiant et mot de passe user diriger vers la page d'accueil user
              if (data.role === 'user') {
                this.$router.push('/home');
                //Si identifiant et mot de passe admin diriger vers la page admin
              } else if (data.role === 'admin') {
                this.$router.push('/AdminHome');
              } else {
                //Affichage si l'identifiant n'existe pas 
                console.log('Utilisateur non inscrit!!');
              }
            })
            //Si une erreure est survenue
            .catch(() => {
              console.log('Echec de la connexion')
            })
        }
      }
    }
</script>
  