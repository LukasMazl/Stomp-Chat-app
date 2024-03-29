package cz.mazl.tul.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.HashSet;
import java.util.Set;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        Set<String> googleScopes = new HashSet<>();
        googleScopes.add(
                "https://www.googleapis.com/auth/userinfo.email");
        googleScopes.add(
                "https://www.googleapis.com/auth/userinfo.profile");
        OidcUserService googleUserService = new OidcUserService();
        googleUserService.setAccessibleScopes(googleScopes);

        http.csrf().disable()
                .authorizeRequests(authorizeRequests -> authorizeRequests
                        .anyRequest().authenticated())
                .oauth2Login(oauthLogin -> oauthLogin
                        .userInfoEndpoint()
                        .oidcUserService(googleUserService));
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
}
