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

export const CategoryList = (props) => (
    <List {...props}>
        <Datagrid>            
            <TextField source="id" />
            <TextField source="nombre" />
            <TextField source="descripcion" />
            <EditButton></EditButton>
        </Datagrid>
    </List>
);

export const CategorytCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <LongTextInput source="descripcion" />            
        </SimpleForm>
    </Create>

    
);

export const CategoryEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <LongTextInput source="descripcion" />            
        </SimpleForm>
    </Edit>

    
);