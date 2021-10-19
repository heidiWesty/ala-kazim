import cv2
import os

# Start Video Capture on Object Initialization


class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
# Release capture when object is deleted

    def __del__(self):
        self.video.release()
# Return the the bytes from the frame with get_frame

    def get_frame(self):
        ret, frame = self.video.read()
        ret, jpeg = cv2.imencode('.jpg', frame)
        return jpeg.tobytes()
