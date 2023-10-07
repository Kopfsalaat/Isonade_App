import React from 'react';
import { InputField, View, Input, ButtonText } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { setName as UserSetName, setLastName as UserSetLastName } from '../store/userSlice';


function SettingsScreen({
    navigation
}) {
    /**
     * Este es el componente que se encarga de la pantalla de configuración.
     * En este caso, se encarga de mostrar los campos de nombre y apellido del usuario.
     */
    // Se obtiene el usuario del store de redux. osea los datos del usuario
    const user = useSelector(state => state.user.value);
    // Se obtiene el dispatch de redux para poder despachar acciones
    const dispatch = useDispatch();

    // Se definen los estados de los campos de nombre y apellido
    const [name, setName] = React.useState(user.name.trim());
    const [lastName, setLastName] = React.useState(user.lastName.trim());

    // Se define la función que se encarga de guardar los datos del usuario
    function save() {
        // Se despachan las acciones para guardar los datos del usuario
        dispatch(UserSetName(name));
        dispatch(UserSetLastName(lastName));
        // Se navega a la pantalla anterior
        navigation.goBack();
    }

    return (
        <View>
            <Input>
                <InputField value={name} placeholder='Nombre' onChangeText={setName}/>
            </Input>
            <Input>
                <InputField value={lastName} placeholder='Apellido' onChangeText={setLastName}/>
            </Input>
            <Button onPress={() => save()}>
                <ButtonText>
                    Guardar
                </ButtonText>
            </Button>
        </View>
    );
};

export default SettingsScreen;