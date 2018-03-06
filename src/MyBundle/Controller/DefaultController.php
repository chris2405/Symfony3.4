<?php

namespace MyBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\DependencyInjection\ContainerInterface;


class DefaultController extends Controller
{
    /**
     * @Route("/bootstrap",name="bootstrap")
     */
    public function IndexAction()
    {
        return $this->render('@My/bootstrap.html.twig');
    }

    /**
     * @Route("/dbz", name="dbz")
     */
    public function dbz()
    {

        return $this->render('Dragon ball z/dbz.html.twig');
    }
}

