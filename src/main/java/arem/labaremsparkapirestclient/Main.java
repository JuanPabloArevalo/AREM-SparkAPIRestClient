/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package arem.labaremsparkapirestclient;

/**
 *
 * @author JuanArevaloMerchan
 */
import spark.Request;
import spark.Response;
import spark.Route;
import static spark.Spark.*;
public class Main {

    public static void main(String[] args) {
//        port(8080);
//        staticFiles.location("/static");
//        get("/", (req, res) -> {
//            res.type("text/html");
//            return "index";
//        });
        setPort(8080);
        staticFileLocation("/static");
        get(new Route("/") {
            @Override
            public Object handle(Request rqst, Response rspns) {
                rspns.redirect("index.html"); return null;
            }
        });
    }


}
