<?php

namespace App\Controller;

use App\Entity\Astronaut;
use App\Repository\AstronautRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class AstronautController extends AbstractController
{
    #[Route('/', name: 'app_astronaut_index', methods: ['GET'])]
    public function index(AstronautRepository $astronautRepository): Response
    {
        return $this->render('astronaut/index.html.twig', [
            'astronauts' => $astronautRepository->findAll(),
        ]);
    }

    #[Route('/astronauts', name: 'app_get_astronauts', methods: ['GET'])]
    public function getAstronauts(AstronautRepository $astronautRepository, SerializerInterface $serializer): Response
    {
        $astronauts = $astronautRepository->findAll();

        $json = $serializer->serialize($astronauts, 'json');

        return new JsonResponse($json, 200, [], true);
    }

    #[Route('/newAstronaut', name: 'app_astronaut_new', methods: ['POST'])]
    public function new(Request $request, AstronautRepository $astronautRepository): Response
    {

        $astronaut = new Astronaut();
        $astronaut->setFirstname($request->request->get('firstname'));
        $astronaut->setLastname($request->request->get('lastname'));
        $astronaut->setAnimal($request->request->get('animal'));
        $astronautRepository->save($astronaut, true);

        return new Response('success', 200, []);
    }

    #[Route('/getAstronaut', name: 'app_astronaut_get', methods: ['GET'])]
    public function getAstronaut(Request $request, AstronautRepository $astronautRepository, SerializerInterface $serializer): Response
    {

        $astronaut = $astronautRepository->find($request->query->get('id'));

        $json = $serializer->serialize($astronaut, 'json');

        return new JsonResponse($json, 200, [], true);
    }

    #[Route('/editAstronaut', name: 'app_astronaut_edit', methods: ['POST'])]
    public function edit(Request $request, AstronautRepository $astronautRepository): Response
    {

        $astronaut = $astronautRepository->find($request->request->get('id'));
        $astronaut->setFirstname($request->request->get('firstname'));
        $astronaut->setLastname($request->request->get('lastname'));
        $astronaut->setAnimal($request->request->get('animal'));

        $astronautRepository->save($astronaut, true);

        return new Response('success', 200, []);
    }

    #[Route('/deleteAstronaut', name: 'app_astronaut_delete', methods: ['POST'])]
    public function delete(Request $request, AstronautRepository $astronautRepository): Response
    {
        $astronaut = $astronautRepository->find($request->request->get('id'));
        $astronautRepository->remove($astronaut, true);

        return new Response('success', 200, []);
    }
}
