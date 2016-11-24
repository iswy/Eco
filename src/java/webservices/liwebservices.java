package webservices;

import javax.ejb.Stateless;
import javax.json.JsonObject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Stateless
@Path( "ws" )
public class liwebservices
{

    @PersistenceContext
    private EntityManager entity;

    @GET
    @Path( "/cero" )
    @Produces(
                {
            MediaType.APPLICATION_JSON
        } )
    public String cero()
    {
        return "{\"msg\" : \"Prueba\"}";
    }

    @POST
    @Path( "/uno" )
    @Produces(
                {
            MediaType.APPLICATION_JSON
        } )
    public String uno( JsonObject js )
    {
        return "{\"msg\" : \"Prueba\"}";

    }

    @PUT
    @Path( "/dos" )
    @Produces(
                {
            MediaType.APPLICATION_JSON
        } )
    public String dos( JsonObject js )
    {
        return "{\"msg\" : \"Prueba\"}";
    }
}
