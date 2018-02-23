<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Entreprise;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;

class EntrepriseController extends Controller
{
    /**
     * Lists all entreprises entities.
     *
     * @Route("/show", name="entreprise_show")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entreprises = $em->getRepository('AppBundle:Entreprise')->findAll();

        return $this->render('entreprise/show.html.twig', array(
            'entreprises' => $entreprises,
        ));
    }

    /**
     * Creates a new entreprise entity.
     *
     * @Route("/new", name="entreprise_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $entreprise = new Entreprise();
        $form = $this->createForm('AppBundle\Form\EntrepriseType', $entreprise);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entreprise);
            $em->flush($entreprise);

            return $this->redirectToRoute('entreprise_show', array('id' => $entreprise->getId()));
        }

        return $this->render('entreprise/new.html.twig', array(
            'entreprise' => $entreprise,
            'form' => $form->createView(),
        ));
    }
}
