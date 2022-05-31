import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Telalogin extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            login_a_verificar: '',
            senha_a_Verificar: '',
            loginPadrao: '1',
            senhaPadrao: '2',
        });
        this.irParaTelaMenu = this.irParaTelaMenu.blind(this);
        this.irParaTelaHome = this.irParaTelaHome.blind(this);
        this.irParaTelaInicial = this.irParaTelaInicial.bind(this);
        this.getLogin = this.getLogin.bind(this);
        this.getSenha = this.getSenha.bind(this);
        this.verificaDadosDigitados = this.verificaDadosDigitados.bind(this);


    }

    irParaTelaHome() {
        this.props.navigation.navigate('telaInicial');

    };

    irParaTelaInicial() {
        this.props.navigation.navigate('TelaInicial');

    };
    irParaTelaMenu() {
        this.props.navigation.navigate('TelaMenu',
            {
                login: this.state.loginPadrao,
                senha: this.state.senhaPadrao,
            }
        );
    }

    getLogin(Logindigitado) {
        if (Logindigitado.length > 0) {
            this.setState({
                login_a_verificar: Logindigitado

            });
        }
        else {
            this.setState({
                login_a_verificar: ''
            });
        }
    };

    getSenha(senhaDigitada)
    {
    if(senhaDigitada.length > 0)
{
    this.setState({
        senha_a_Verificar: senhaDigitada
    });
}
else
{
    this.setState({
        senha_a_Verificar: ''
    });
}
}

VerificaDadosDigitados()
{
if (this.state.senha_a_Verificar == this.state.loginPadrao &&
    this.state.senha_a_Verificar == this.state.senhaPadrao) 
{
    this.irParaTelaMenu();
}
else 
{
    alert("login ou senha incorretos");
}
};

render(){
     return(
         <View style = {estilos.areaFundo}>
             <View style = {estilos.areaTitulo}>
                 <Text style = {estilos.titulo}> Bem-vindo</Text>
             </View>
             <ScrollView style = {estilos.areaFormulario}>
                 <Text style = {estilos.labels}>Login</Text>
                 <TextInput placeholder='Digite seu e-mail'
                 onchangeText={this.getlogin}
                 style = { estilos.campos} />
                <Text style ={estilos.labels}>Senha</Text>
                <TextInput placeholder='Digite seu Número de Matricula  '
                         onChangeText={this.getSenha}
                         style={estilos.campos} />

                         </ScrollView>
                     <View style = {estilos.areabotao1}>
                    <TouchableOpacity style = {estilos.botao}
                       onPress = {this.verificaDadosDigitados}>
                       <Text style={estilos.textoBotao}>Acessar </Text>
                    </TouchableOpacity>
                <TouchableOpacity style={estilos.botao2}>
                   <Text style={estilos.textoBotao}>Criar Conta</Text>
                </TouchableOpacity>
                <TouchabLeOpacity style={estilos.botao2}
                onPress = {this.irParaTelaHome}>
                <Text style={estilos.textoBotao2}>Voltar</Text>
            </TouchabLeOpacity>
        </View>
        <View style={estilos.areaRodape}>
        <Text style={estilos.rodape}>Gui</Text>
                <Text style={estilos.rodape}>2022</Text>

                </View>
                </View>
     );}}

export default TelaLogin;

const estilos = StyleShhet.create(
    {
    //VIEW
    areaFundo:{flex:1, backgroundColor: 'darkred'},
    areaTitulo:{height:200, alignItens: 'center', justifyContent:'center', paddingTop:30},
    areaFormulario:{flex:1, marginHorizontal:5, borderTopLeftRadius:25, borderTopRightRadius:40,
        backgroudnColor:'white'},
areaBotao1: {flex:1, justifyContent:'space-around', alignItems:'center',
     backgroundColor:'white', marginHorizontal:5},

    //TEXT

    Titulo:{fontSize:35, color: 'white'},
    labels:{fontSize:28, marginBottom:10, marginLeft:20, marginTop:30},
    campos:{fontSize:28, fontStyle:'italic', marginBottom:30, marginHorizontal:30,
           borderBottomColor:'black', borderBottomWidth:1},
    rodape:{color:'white',fontSize:15},
    textoBotao:{fontSize:30, color:'white', alignSelf:'center'},
    textoBotao2:{fontSize:15, color:'darkred', alignSelf:'center'},
    //IMAGE
    img:{width:200,height:200,borderRadius:100},
    //BOTAO
    botao:{height:60, width:150, borderColor: 'darkred', borderWidth:2, borderWidth:25, 
    borderRadius:25, backgroundColor:'darkred'},
    botao2:{height:50, widht:150, }

    })
