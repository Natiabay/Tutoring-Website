import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

export interface ContactFormData {
  name: string
  phone: string
  email: string
  grade: string
  subject: string
  message: string
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new'
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw new Error('Failed to submit contact form')
  }
} 