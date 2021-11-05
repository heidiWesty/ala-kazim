# Things to know
# This is the documentation for the function from the pickle library, pickle.dump() https://pythontic.com/modules/pickle/dump
# + Synopsis
#   - pickle.dump() is a byte stream serializer. It is taking the python Object, face_data and serializing it as a series of bytes into a location in memory.
#   - In our case, the stream is our python object face_data, taking it's two array elements [ known_face_encodings, known_face_metadata ] and putting them into var face_data_file
#
# + Main function
#   - This function is used twice in the main function to save all captured faces to disk periodically, and on program exit.

def save_known_faces():
    with open("known_faces.dat", "wb") as face_data_file:
        face_data = [known_face_encodings, known_face_metadata]
        pickle.dump(face_data, face_data_file)
        print("Known faces backed up to disk.")
        
        # Our list of known face encodings and a matching list of metadata about each face.
        
        known_face_encodings = []
        known_face_metadata = []
