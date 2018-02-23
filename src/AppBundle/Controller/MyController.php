<?php

namespace AppBundle\Controller;

use AppBundle\Form\Type\MyFormType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class MyController extends Controller
{
    /**
     * @Route("/my/{param}", name="my", defaults={"param"=1})
     * @Method({"GET", "POST"})
     */
    public function myAction(Request $request)
    {
        $form=$this->createForm(MyFormType::class);
        $form->handleRequest($request);

//        if ($form->isValid()){
//            dump($form->getName());
//            dump($form->getData());
//        }

        return $this->render('myTemplate/my.html.twig', [
            'nom' => $request->get('param'),
            'form' => $form->createView()

        ]);


//        //param url
//        var_dump($request->get('param'));
//        //query -> GET
//        var_dump($request->query->all());
//        // request ->POST
//        var_dump($request->request->all()); die;
//
//        dump('toto');
//        dump($request);

    }


}
