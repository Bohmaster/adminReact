import React from 'react';
import { List,
         Edit,
         Create,
         Datagrid,
         ReferenceField, 
         TextField, 
         EditButton, 
         DisabledInput, 
         LongTextInput, 
         ReferenceInput, 
         SelectInput,
         ImageInput,
         ImageField, 
         SimpleForm, 
         TextInput } from 'admin-on-rest';

const API = "http://localhost:3005/api";

let onFileDialogCancel = (args) => {
    console.log('onFileDialogCancel', args)
}     

export const NovedadList = (props) => (
    <List {...props}>
        <Datagrid>                    
            <TextField source="id" />
            <TextField source="titulo" />
            <TextField source="descripcion" />
            <TextField source="cuerpo"></TextField>
            <ImageField source="fotos" src="nombre"/>
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const NovedadCreate = (props) => (
    <Create {...props}>
        <SimpleForm>            
            <TextInput source="titulo" />
            <TextInput source="descripcion" />
            <LongTextInput source="cuerpo" />
            <ImageInput source="fotos" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const NovedadEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>            
            <TextInput source="titulo" />
            <TextInput source="descripcion" />
            <LongTextInput source="cuerpo" />
            <ImageInput source="fotos" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

