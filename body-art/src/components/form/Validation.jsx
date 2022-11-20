export default function Validate(data) {
    const errors = data.reduce((previous, current)=>{
        previous[current.field] = current.defaultMessage;
        return previous;
      }, {})

      return errors;
}