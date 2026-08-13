
import { useClerk } from '@clerk/expo';
import { PreventRemoveContext } from 'expo-router/build/react-navigation';
import { View , Text, Pressable } from 'react-native'

export default function Home(){
    const {signOut} = useClerk();
    return (
        <View>
        <Text className='text-white'> Hello fron the Home page </Text>
        <Pressable onPress={() => signOut()}>
        <Text className='text-white'>Sign out</Text>
        </Pressable>
        </View>
    );
}
