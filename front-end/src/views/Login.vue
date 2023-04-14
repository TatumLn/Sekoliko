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
  //importer dans vue 
  import { defineComponent } from 'vue'

  //
  interface LoginPageData {
  title: string;
  identifiant: string;
  password: string;
  errors: { [key: string]: string };
}
  
  export default defineComponent({
    //Nom du viewers
    name: 'LoginPage',
    data(): LoginPageData {
      return {
        title: 'Sekoliko',
        identifiant: '',
        password: '',
        errors: {}
      }
    },
    methods: {
      connecter: function () {
        //Achiffage lorsque les champs sont vide
        this.errors = {};
        if (this.identifiant === '' || this.password === '') {
          this.errors.identifiant = 'Entrer Votre identifiant SVP!!';
          this.errors.password = 'Entrer Votre Mot de passe SVP!!';
        }else{
        //Lorsque les champs sont bien remplies
        //Endpoint avec le back-end
      fetch('http://localhost:3000/api/auth/', {
        //methode POST
        method: 'POST',
        //Envoie la requete sous forme d'objet JSON
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identifiant: this.identifiant,
          password: this.password
        })
      })
      .then(response => response.json())
        .then(data => {
          //Si l'identifiant entrer est un identifiant user diriger l'user vers la page d'accueil user
        if (data.role === 'user') {
        this.$router.push('/home');
        //Si admin diriger vers la page d'accueil admin
        } else if (data.role === 'admin') {
        this.$router.push('/AdminHome');
        } else {
          //Si ni admin ni user "Utilisateur non inscrit"
        console.log('Utilisateur non inscrit!!');
        }
      })
      .catch( () => {
        //en cas d'erreur
        console.log('Echec de la connexion')
      })
    }
    }
      }
    })
</script>
  