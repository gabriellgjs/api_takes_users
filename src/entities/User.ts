export interface UserProps{
  name: string,
  email: string,
  passoword: string
}

export class User {
  private props : UserProps;

  constructor (props: UserProps) {
    this.props = props;
  }

   get name () {
    return this.props.name;
  }

  get email () {
    return this.props.email;
  }

  get passoword () {
    return this.props.passoword;
  }

  static factoryUser(name: string, email: string, passoword: string): User {
    const props : UserProps = {
      name,
      email,
      passoword
    };
    return new User(props);
  }
  
}