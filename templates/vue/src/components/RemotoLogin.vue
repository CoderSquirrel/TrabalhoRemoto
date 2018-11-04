<template>
<div class="login-container">
<div class="grid col-6">
      <VueTabs :tab-id.sync="tabId" group-class="primary start" animate>
        <VueTab
          id="tab1"
          label="Entrar"
          icon="lock">
          <div class="tab-content">
            <VueInput icon-left="person" v-model="usuario" placeholder="Usuário"/>
            <VueInput icon-left="lock_open" type="password" v-model="senha" placeholder="Senha"/>
            <VueButton class="primary" icon-left="arrow_forward" >Entrar</VueButton>
          </div>
        </VueTab>
        <VueTab
          id="tab2"
          label="Recuperar Senha"
          icon="autorenew"        >
          <div class="tab-content">
            <VueInput icon-left="person" v-model="usuario" placeholder="Usuário"/>
            <VueButton class="primary" icon-left="arrow_forward" >Recuperar</VueButton>

          </div>
        </VueTab>
        <VueTab
          id="tab3"
          label="Cadastrar"
          icon="edit"
        >
          <div class="tab-content">
            <VueInput icon-left="perm_identity" v-model="nome" placeholder="Nome"/>
            <VueInput icon-left="person" v-model="usuario" placeholder="Usuário"/>
            <VueInput icon-left="email" v-model="email" placeholder="Email"/>
            <VueInput icon-left="lock_open" type="password" v-model="senha" placeholder="Senha"/>
            <VueButton class="primary" icon-left="arrow_forward" >Cadastrar</VueButton>

          </div>
        </VueTab>
      </VueTabs>
      </div>
      </div>
</template>

<script>
export default {
  name: 'RemotoLogin',
  data () {
    return {
      tabId: 'tab1',
      stateTitle: 'Login',
      usuario: '',
      senha: '',
      email: '',
      nome: ''
    }
  }
}
</script>
<style >
.default-slot{
  font-size:12px
}
.login-container {
  width:435px;
box-shadow:1px 0px 2px 1px rgba(0,0,0,0.2);
  height:300px;
  display:block;
  position:relative;
  margin:auto;
  border-radius:8px;
}
.login-container > * {
  margin: auto
}
.login-body {
    height:200px;
    text-align:left;
  padding:1px 50px;
  margin: auto;
  display: block;
  position: relative;
  width: 60%
}

a,
a.active,
a:active,
a:focus,
a.clicked{
  color: grey;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700
}
a:hover {
  color:black
}
input, label {
  display: block;
}
label{
  font-size:10px
}
input {
  border: 1px solid silver;
  padding: 5px;
  border-radius: 8px;
}
input:focus{
  outline: none;
}
.tab-content > * {
  margin: 8px; display: block;
}
</style>
