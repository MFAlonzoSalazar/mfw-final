import { StyledLink } from '../StyledComponents';

export default function MyNavLink({route, label}) {
    return(
        <StyledLink className="Links serious" to={route}>
               {label}
        </StyledLink>
    )
}