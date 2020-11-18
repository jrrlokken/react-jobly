import { Alert } from 'reactstrap';

const AppAlert = ({ type, messages }) => {
  return (
    <Alert color={`${type}`}>
      {messages.map(error => (
        <p className="mb-0 small" key={error}>
          {error}
        </p>
      ))}
    </Alert>
  )
}

Alert.defaultProps = {
  type: "danger",
  messages: []
};

export default AppAlert;