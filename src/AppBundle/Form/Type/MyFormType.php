<?php

namespace AppBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class MyFormType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('nom', TextType::class, array(
                'data' => 'jacquot',
                'required' => false,
                'label' => 'Entrez votre nom :'
            ))
            ->add('prenom', TextType::class, array(
                'data' => 'christopher',
                'required' => false,
                'label' => 'Entrez votre prénom :'
            ))
            ->add('date', BirthdayType::class, array(
                'label' => 'Veuillez saisir votre date de naissance :',
                'placeholder' => array(
                    'day' => 'Jour',
                    'month' => 'Mois',
                    'year' => 'Année',
                )))
            ->add('submit', SubmitType::class)
            ->add('delete', ButtonType::class);

    }
}

