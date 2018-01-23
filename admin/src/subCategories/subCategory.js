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
         SimpleForm, 
         TextInput } from 'admin-on-rest';

export const SubCategoryList = (props) => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="Categoría" source="categoriaId" reference="Categoria">
                <TextField source="nombre" />
            </ReferenceField>            
            <TextField source="id" />
            <TextField source="nombre" />
            <TextField source="descripcion" />
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const SubCategoryCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput
                label="Categoria" 
                source="categoriaId"
                reference="Categoria" 
                allowEmpty>
                <SelectInput optionText="nombre" />
            </ReferenceInput>  
            <TextInput source="nombre" />
            <LongTextInput source="descripcion" />            
        </SimpleForm>
    </Create>
);

export const SubCategoryEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput
                label="Categoria" 
                source="categoriaId"
                reference="Categoria" 
                allowEmpty>
                <SelectInput optionText="nombre" />
            </ReferenceInput>  
            <TextInput source="nombre" />
            <LongTextInput source="descripcion" />            
        </SimpleForm>
    </Edit>
);