import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import loopbackRestClient, {authClient} from 'aor-loopback';

import spanishMessages from 'aor-language-spanish';

import { ProductList, ProductCreate, ProductEdit } from './products/product';
import { SubCategoryList, SubCategoryCreate, SubCategoryEdit } from './subCategories/subCategory.js';
import { CategoryList, CategorytCreate, CategoryEdit } from './categories/category.js';
import { NovedadCreate, NovedadEdit, NovedadList } from './novedades/novedades.js';
import { PromocionCreate, PromocionEdit, PromocionList } from './promociones/promociones.js';

import Dashboard from './components/dashboard'
import Header from './components/header'

import addUploadCapabilities from './fileUpload';

const API = "http://localhost:3005/api";

const messages = {
    'es': spanishMessages,
};

// const accessToken = JSON.parse(localStorage.getItem('lbtoken'));

// fetch(`${API}/users/${accessToken.value.userId}?access_token=${accessToken.value.id}`)
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(j) {
//     console.log(j);
//   })

  const App = () => (
    <Admin
        title={(<Header></Header>)}
        dashboard={Dashboard} 
        restClient={addUploadCapabilities(loopbackRestClient(API))} 
        authClient={authClient(`${API}/users/login`)} 
        locale="es"
        messages={messages}>
        <Resource 
          name="Comercios" 
          list={ProductList}
          create={ProductCreate}
          edit={ProductEdit} />
        <Resource 
          name="SubCategoria" 
          list={SubCategoryList}
          create={SubCategoryCreate}
          edit={SubCategoryEdit} />
        <Resource 
          name="Categoria" 
          list={CategoryList}
          create={CategorytCreate}
          edit={CategoryEdit} />
          <Resource 
          name="Novedads" 
          list={NovedadList}
          create={NovedadCreate}
          edit={NovedadEdit} /> 
          <Resource 
          name="promociones" 
          list={PromocionList}
          create={PromocionCreate}
          edit={PromocionEdit} />   
          
    </Admin>
);

export default App;