<?php

namespace MyBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class TestController extends Controller
{
    /**
     * @Route("/page/",name="test")
     */
    public function test()
    {
        return $this->render('@My/test.html.twig');
    }

    /**
 * @Route("/page2/",name="test2")
 */
    public function test2()
    {
        return $this->render('@My/test2.html.twig');
    }

    /**
     * @Route("/exemple/",name="exemple")
     */
    public function exemple()
    {
        return $this->render(':formation:exemple.html.twig');
    }

}
