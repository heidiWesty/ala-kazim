# Create Flask Endpoint
# Call our VideoCamera object
# Generate response to src/index.js

from flask import Flask, render_template, Response
from camera import VideoCamera

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('Camview.js')


def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, threaded=True, use_reloader=False)
