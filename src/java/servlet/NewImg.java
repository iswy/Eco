/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Path;
import java.nio.file.Paths;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author pi
 */
@MultipartConfig
@WebServlet( name = "NewImg" , urlPatterns =
         {
             "/NewImg"
} )
public class NewImg extends HttpServlet
{
    void mensaje( String m )
    {
        System.out.println( m );
    }
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest( HttpServletRequest request , HttpServletResponse response )
        throws ServletException , IOException
    {

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet( HttpServletRequest request , HttpServletResponse response )
        throws ServletException , IOException
    {
        processRequest( request , response );
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost( HttpServletRequest request , HttpServletResponse response )
        throws ServletException , IOException
    {
        PrintWriter out = response.getWriter();
        //out.println("entro a servelt");
        String nombre = request.getParameter( "nombre" ); //recibe lo que esta contenido en el iframe
        mensaje( "lo k se recivio en el servlet fue un: " + nombre );
        Part arch = request.getPart( "archivo" ); // el input tipo file
        InputStream is = arch.getInputStream(); //leer el contenido
        //String direccion=this.getServletInfo();
        //mensaje(direccion);
        File f = new File( nombre );
        Path currentRelativePath = Paths.get( "" );
        String nuevoDir = currentRelativePath.toAbsolutePath().toString() + File.separator + "img";
        File folder = new File( nuevoDir );
        //+ File.separator + "img" + File.separator+f.getName();
        if ( !folder.exists() )
            folder.mkdirs();
        nuevoDir += File.separator + f.getName();
        //ruta real-> home/(nombre usuario)/Aplicaciones/glassfish-4.1.1/glassfish/domains/domain1/config/img/(nombre archivo)
        //al emplear las instrucciones del path, netbeans recupera esta direccion en donde segun esta clase esta trabajando
        //por esa razon, se coloca la ruta de forma estatica al momento de guardarla en la base de datos
        //no es algo de lo que dependa por ahora el carrito para que funcione con las imagenes, por el momento
        //se encuentra implementado de esta forma
        mensaje( "ubicacion de la imagen: " + nuevoDir );
        File nf = new File( nuevoDir );
        FileOutputStream ous = new FileOutputStream( nf );
        int dato = is.read();//leer el archivo
        while ( dato != -1 )
        {
            ous.write( dato );
            dato = is.read();
        }
        ous.close();
        is.close();
    }

    /**
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo()
    {
        return "Short description";
    }// </editor-fold>

}
