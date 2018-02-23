<?php

namespace MyBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\DependencyInjection\ContainerInterface;


class DefaultController extends Controller
{
    /**
     * @Route("/",name="bootstrap")
     */
    public function IndexAction()
    {
        return $this->render('@My/Default/index.html.twig');
    }


}

