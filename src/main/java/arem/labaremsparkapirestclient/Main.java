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
import static spark.Spark.*;
import spark.ModelAndView;
import spark.Request;
import spark.Response;

import java.util.HashMap;
import java.util.Map;
public class Main {

    public static void main(String[] args) {
        staticFileLocation("/public");
                get("/cuadrado/:id", (req, res) -> {
            String id = req.params(":id");
            try{
               long numero = Long.parseLong(id);
               numero = numero*numero;
               return String.valueOf(numero);
            }catch(NumberFormatException e){
                res.status(400);
                return "El siguiente número es inválido: "+id;
            }
        });
    }

    public static ModelAndView helloWorld(Request req, Response res) {
        Map<String, Object> params = new HashMap<>();
        params.put("name", req.queryParams("name"));
        return new ModelAndView(params, "index");
    }

}
