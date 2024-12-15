import { View } from 'react-native'
import { router } from 'expo-router'

import { Welcome } from '@/components/welcome'
import { Button } from '@/components/button'
import { Steps } from '@/components/steps'
import { IconPlus } from '@tabler/icons-react-native'

export default function Index() {
	return (
		<View style={{ flex: 1, padding: 30, gap: 40 }}>
			<Welcome />
			<Steps />

			<Button onPress={() => router.navigate('/home')}>
				<Button.Title>Começar</Button.Title>
			</Button>
		</View>
	)
}
