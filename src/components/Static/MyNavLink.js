import { StyledLink } from '../StyledComponents';

export default function MyNavLink({route, label}) {
    return(
        <StyledLink className="Links" to={route}>
               {label}
        </StyledLink>
    )
}