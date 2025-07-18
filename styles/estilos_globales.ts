import { StyleSheet } from "react-native";


export const estilosGlobales = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 100,
    alignSelf: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  forgot: {
    textAlign: 'right',
    color: '#666',
    fontSize: 13,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outlineButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#005EB8',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  outlineButtonText: {
    color: '#005EB8',
    textAlign: 'center',
    fontSize: 16,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#005EB8',
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});