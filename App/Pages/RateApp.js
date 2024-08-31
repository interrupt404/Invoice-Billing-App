import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RateApp = () => {
  const [rating, setRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    queryType: 'Query', // Default value
    feedback: '',
  });
  const [showReviews, setShowReviews] = useState(true);

  const handleRating = (value) => {
    setRating(value);
    if (value < 5) {
      setShowReviews(false);
      setShowForm(true); // Show form for ratings less than 4
    } else if (value === 5) {
      alert('Thank you for the 5-star rating!');
      setShowReviews(true); // Show reviews for 5-star rating
    }
  };

  const handleSubmitForm = () => {
    // Handle the form submission
    alert('Thank you for your feedback!');
    setRating(0);
    setShowForm(false);
    setShowReviews(true); // Reset reviews visibility
    setForm({
      name: '',
      email: '',
      queryType: 'Query', // Reset to default value
      feedback: '',
    });
  };

  const reviews = [
    { name: 'Paras', rating: 5, review: 'Excellent app with great features!' },
    { name: 'Chandan', rating: 5, review: 'Billings made easy!' },
    { name: 'Rishabh', rating: 4, review: 'Very useful, but could include the use of AI.' },
    { name: 'Rajat', rating: 3, review: 'Good Features but UI can be Improved.' },
    { name: 'Arpita', rating: 4, review: 'Fantastic app! Simplifies billing and invoicing with ease at comfort of your home.' },
    { name: 'Manish', rating: 4, review: 'Highly efficient and user-friendly interface; highly recommended!' },
    { name: 'Utkarsh', rating: 3, review: 'I could not generate the bill.' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Rating Section */}
      <View style={styles.ratingSection}>
        <Text style={styles.title}>Rate Our App</Text>
        {showForm ? (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Feedback Form</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <Text style={styles.label}>Feedback Type</Text>
            <Picker
              selectedValue={form.queryType}
              style={styles.picker}
              onValueChange={(itemValue) => setForm({ ...form, queryType: itemValue })}
            >
              <Picker.Item label="Query" value="Query" />
              <Picker.Item label="Suggestion" value="Suggestion" />
              <Picker.Item label="Complaint" value="Complaint" />
            </Picker>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Feedback or Query"
              value={form.feedback}
              onChangeText={(text) => setForm({ ...form, feedback: text })}
              multiline
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmitForm}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                style={styles.button}
                onPress={() => handleRating(star)}
              >
                <Text style={[styles.buttonText, rating >= star && styles.selectedText]}>⭐</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {!showForm && rating > 0 && rating < 5 && (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => setShowForm(true)}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Reviews Section */}
      {showReviews && (
        <View style={styles.reviewsSection}>
          <Text style={styles.reviewsTitle}>What Our Users Say</Text>
          {reviews.map((review, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardName}>{review.name}</Text>
              <Text style={styles.cardRating}>Rating: {review.rating} ⭐</Text>
              <Text style={styles.cardReview}>{review.review}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2', // Light gray background
  },
  ratingSection: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark gray text color
    textAlign: 'center', // Center align text
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'blue', // Sky blue border color for non-selected stars
    backgroundColor: '#fff', // White background for non-selected stars
  },
  buttonText: {
    color: '#000', // Black text color for non-selected stars
    fontSize: 24,
  },
  selectedText: {
    color: '#fff', // White text color for selected stars
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
  formContainer: {
    width: '100%',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  reviewsSection: {
    padding: 20,
  },
  reviewsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardRating: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardReview: {
    fontSize: 16,
    color: '#666',
  },
});


export default RateApp;
