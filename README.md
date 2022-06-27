# Rust Image Effects
- Projeto de edição de imagens permite que o usuário faça um upload de uma imagem e receba a imagem feita as devidas transformações, como rotacionar e transformar cores para tons de cinza. 
- Projeto realizado com Rust, html e javascript e o objetivo final era utilizar o Rust para compreender e criar um projeto que utilize Wasm (Web Assembly).
- O projeto também utiliza Webpack para compilar os módulos do Javascript.
- Conteúdo aplicado nas aulas de [Zero To Mastery](https://zerotomastery.io/).


## Índice

- [Overview](#overview)
  - [Desafio](#desafio)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Processo](#processo)
  - [Construção](#construção)
  - [Aprendizado](#aprendizado)
- [Author](#author)


## Overview

### Desafio

- Esse projeto foi realizado com Rust, e isso, por si só, já foi um desafio! 
- É uma linguagem que eu nunca havia utilizado e o aprendizado nesse projeto foi muito bom! 
- Adicionei ao projeto original a mudança da imagem para 180 graus e ambas as transformações.

### Screenshots

![](./screenshot.jpg)

- Esse projeto é responsivo e o ideal é que o usuário envie imagens .PNG que não sejam tão grandes, menor que 5mb para um desempenho melhor do aplicativo.

### Links

- Live Site URL: [Image Effects](https://ztm-rust-image-effects.vercel.app/)

## Processo

### Construção

- HTML Semântico
- [TailwindCSS](https://tailwindcss.com/)
- Javascript
- [Rust](https://www.rust-lang.org/pt-BR)
- [Webpack](https://webpack.js.org/)

### Aprendizado

- O aprendizado que gostaria de destacar é sobre Rust e WebAssembly. 
- Ao iniciar esse projeto da Zero To Mastery, eu acabei indo mais a fundo nos estudos em relação aos dois conteúdos e pude tirar bastante proveito de tudo.
- Essa parte do código eu acho que foi a que mais me chamou atenção, já que o Rust usa Ownership models, que significa que as variáveis tem donos. Isso foi o mais complexo para mim, porém ao entender isso o código ficou mais compreensível, a exemplo de entender o porquê de usar o borrow (&variável).

```rs
 let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded.".into());
```

## Author


<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/rafael99ldm/">
        <img src="https://github.com/RafaZeero.png" width="100px;" alt="Foto de Rafael Lima do GitHub"/><br>
        <sub>
          <b>Rafael Lima</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
