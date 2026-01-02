import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from './firebase';
import type { AmigurumiType } from '$lib/types/types';

export async function getAmigurumis() {
	const amigurumisColl = collection(db, 'amigurumis');
	const amigurumisSnapshot = await getDocs(amigurumisColl);
	const amigurumisList = amigurumisSnapshot.docs.map((doc) => doc.data());
	return amigurumisList;
}

export async function getAmigurumiById(id: string): Promise<AmigurumiType | null> {
	const amigurumisColl = collection(db, 'amigurumis');
	const q = query(amigurumisColl, where('id', '==', id));
	const snapshot = await getDocs(q);

	if (snapshot.empty) {
		return null;
	}

	return snapshot.docs[0].data() as AmigurumiType;
}
