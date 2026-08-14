
import { useClerk } from '@clerk/expo';
import { View , Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home(){
    const {signOut} = useClerk();
    return (
        <SafeAreaView>
        <Text className='text-white'> Hello fron the Home page </Text>
        <Pressable onPress={() => signOut()}>
        <Text className='text-white'>Sign out</Text>
        </Pressable>
        </SafeAreaView>
    );
}
