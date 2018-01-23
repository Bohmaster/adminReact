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

export const PromocionList = (props) => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="Comercio" source="comercioId" reference="Comercios">
                <TextField source="nombre" />
            </ReferenceField>            
            <TextField source="id" />
            <TextField source="nombre" />
            <TextField source="descripcion" />
            <ImageField source="fotos" src="nombre"/>
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const PromocionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput
                label="Comercio" 
                source="comercioId"
                reference="Comercios" 
                allowEmpty>
                <SelectInput optionText="nombre" />
            </ReferenceInput>  
            <TextInput source="nombre" />
            <LongTextInput source="descripcion" />
            <ImageInput source="fotos" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const PromocionEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput
                label="Comercio" 
                source="comercioId"
                reference="Comercios" 
                allowEmpty>
                <SelectInput optionText="nombre" />
            </ReferenceInput>  
            <TextInput source="nombre" />
            <LongTextInput source="descripcion" />
            <ImageInput source="fotos" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

